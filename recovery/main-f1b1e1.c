/*	Author: brettmccausland
 *  Partner(s) Name: Jeremy
 *	Lab Section:
 *	Assignment: Lab 11  Exercise 1
 *	Exercise Description: [optional - include for your own benefit]
 *
 *	I acknowledge all content contained herein, excluding template or example
 *	code, is my own original work.
 */
  #include  <avr/io.h>
  // -- added from provided source files --
  #include "io.h"
  #include "keypad.h"
  // #include "scheduler.h"
  #include "keypad.h"
  #include <avr/interrupt.h>
  #ifdef _SIMULATE_
  #include "simAVRHeader.h"
  #endif

  // -------- State Varibles -------------

  enum display_States {INIT,START,DISPLAY,PAUSE_REL,PAUSE_PRESS,START_PRESS};
  enum KEYPAD {READ};
  // -------- End State Varibles -------------

  // -------- Shared Varibles -------------
  unsigned char temp;
  unsigned char A0;
  // -------- End Shared Varibles -------------

 void shift_left(char _dis[],int size){
   for (int i=0;i<size-1;i++ )
   {
     _dis[i]= _dis[i+1];
   }
 }
 void concat(char _dis[],char _msg[],int i,int size){
    _dis[size-1]= _msg[i];
 }
 void newDisplay(char _dis[],char _msg[],int i,int size){
   shift_left(_dis,size);
   concat(_dis,_msg,i,size);

 }
  // -------- Clock Varibles -------------
  volatile unsigned char TimerFlag = 0;
  unsigned long _avr_timer_M = 1;
  unsigned long _avr_timer_cntcurr = 0;
// -------- End Clock Varibles -------------

//  -------- scheduler -------------
typedef struct _task{
	// Tasks should have members that include: state, period,
	//a measurement of elapsed time, and a function pointer.
	signed char state; 		//Task's current state
	unsigned long period; 		//Task period
	unsigned long elapsedTime; 	//Time elapsed since last task tick
	int (*TickFct)(int); 		//Task tick function
} task;
// -------- End scheduler -------------

  // -------- Tick Functions -------------
  int setKeypad(){
    unsigned char x;
    x = GetKeypadKey();
    switch(x){
      case '\0':temp = 0x1F;break;
      case '1': temp = 0x01;break;
      case '2': temp = 0x02;break;
      case '3': temp = 0x03;break;
      case '4': temp = 0x04;break;
      case '5': temp = 0x05;break;
      case '6': temp = 0x06;break;
      case '7': temp = 0x07;break;
      case '8': temp = 0x08;break;
      case '9': temp = 0x09;break;
      case 'A': temp = 0x0A;break;
      case 'B': temp = 0x0A;break;
      case 'C': temp = 0x0A;break;
      case 'D': temp = 0x0D;break;
      case '*': temp = 0x0E;break;
      case '0': temp = 0x00;break;
      case '#': temp = 0x0F;break;
      default:  temp = 0x1B;break;
    }
    return READ;

  }

 int displaySMTick(int state){

   // read
   switch (state) {
     case INIT:
       state = DISPLAY;
        break;
     case DISPLAY:
        break;

   }
   switch (state) { // actions
      case INIT:
        break;
      case DISPLAY:
        LCD_WriteCommand(temp + '0');
        break;
   }

   return state;
 }

// -------- End Tick Functions -------------



// -------- Timmer Functions -------------
  void TimerOn(){
    TCCR1B = 0x0B;
    OCR1A = 125;
    TIMSK1 = 0x02;
    TCNT1 = 0;
    _avr_timer_cntcurr = _avr_timer_M;
    SREG |= 0x80;

  }
  void TimerOff() {
   TCCR1B = 0x00;
  }
  void TimerISR(){
    TimerFlag = 1;
  }
  ISR(TIMER1_COMPA_vect){
    _avr_timer_cntcurr--;
    if(_avr_timer_cntcurr == 0){
      TimerISR();
      _avr_timer_cntcurr = _avr_timer_M;
    }
  }
  // set timer to tick every M ms
  void TimerSet(unsigned long M){
    _avr_timer_M=M;
    _avr_timer_cntcurr = _avr_timer_M;
  }
// -------- End Timmer Functions -------------



int main(void) {
    /* Insert DDR and PORT initializations */
  DDRC = 0xFF; PORTC= 0x00; //LED SC
  DDRD = 0xFF; PORTD = 0x00;
  DDRB = 0x00; PORTB = 0xFF; //

    LCD_init();
    LCD_ClearScreen();



    unsigned short i; //scheduler for loop

    static task task1,task2;
    task* tasks[] = {&task1,&task2};
    const unsigned short numTasks = sizeof(tasks)/sizeof(task*);


    // Task 1 (getkeypad)
    task1.state = READ;
    task1.period = 100;
    task1.elapsedTime = task1.period;
    task1.TickFct = &setKeypad;

    // Task 2 (displaySM)
    task2.state = INIT;
    task2.period = 500;
    task2.elapsedTime = task2.period;
    task2.TickFct = &displaySMTick;

    TimerSet(10); // need to set and create var
    TimerOn();
    while (1) {
      for(i=0; i<numTasks;i++){
        if (tasks[i]->elapsedTime == tasks[i]->period){ //task ready to tick
          tasks[i]->state = tasks[i]->TickFct(tasks[i]->state);// Set Next state
          tasks[i]->elapsedTime=0; //Reset the elapsed time
        }
        tasks[i]->elapsedTime += 10;

      }
      while(!TimerFlag);
      TimerFlag = 0;

    }
    return 0;
}
