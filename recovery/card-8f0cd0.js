import firebase from 'firebase';
import db from '../config/firebase';
import uuid from 'uuid'


export const updateCoverText = (text) => {
  return {type:'UPDATE_COVER_TEXT', payload:text}
}
export const updateBodyoneText = (text) => {
  return {type:'UPDATE_BODY_ONE_TEXT', payload:text}
}
export const updateBodytwoText = (text) => {
  return {type:'UPDATE_BODY_TWO_TEXT', payload:text}
}
export const updateCoverFont = (text) => {
  return {type:'UPDATE_COVER_FONT', payload:text}
}
export const updateCoverTextAlignment = (text) => {
  return {type:'UPDATE_COVER_TEXT_ALIGNMENT', payload:text}
}
export const updateCoverTextBold = (_bool) => {
  return {type:'UPDATE_COVER_TEXT_BOLD', payload:_bool}
}
export const updateCoverTextItalic = (_bool) => {
  return {type:'UPDATE_COVER_TEXT_ITALIC', payload:_bool}
}
export const toggleCoverModal = ( isCoverModalVisible) => {
  return {type:'TOGGLE_MODAL_COVER', payload: !isCoverModalVisible}
}
