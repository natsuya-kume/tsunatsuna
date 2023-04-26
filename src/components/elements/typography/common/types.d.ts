import React from 'react'

export type FontSize =
  | 'size-9'
  | 'size-10'
  | 'size-12'
  | 'size-13'
  | 'size-14'
  | 'size-16'
  | 'size-18'
  | 'size-20'
  | 'size-22'
  | 'size-24'
  | 'size-26'
  | 'size-28'
  | 'size-30'
  | 'size-32'
  | 'size-34'
  | 'size-50'
export type FontWeight = '400' | '500' | '700'

export type FontColor =
  | 'black'
  | 'gray'
  | 'light-gray'
  | 'primary'
  | 'secondary'
  | 'white'

export type FontProps = {
  size?: FontSize
  weight?: FontWeight
  color?: FontColor
  className?: string
  textAlign?: TextAlign
  children?: React.ReactNode
}

export type TextAlign = 'center' | 'start' | 'end' | 'inherit'
