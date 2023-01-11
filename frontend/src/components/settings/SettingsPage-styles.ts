import styled from "styled-components"

export const SettingsPageWrapper = styled.div`
  margin-top: 100px;
`

export const SettingsPageDiv = styled.div`
  box-sizing: border-box;
  max-width: 600px;
  min-height: 500px;
  margin: 0 auto;
  padding: 15px 25px;
  border-radius: 5px;
  background: ${props => props.theme.blockBackground};
  border: 2px solid ${props => props.theme.blueColor};
`

export const SettingItem = styled.div``

export const SettingsPageSpan = styled.span`
  padding-right: 20px;
`

export const SelectOption = styled.option`
  background: ${props => props.theme.lighterBlockBackground};
  color: ${props => props.theme.fontColor};
  border-radius: 5px;
`

export const SettingsSelect = styled.select`
  width: 150px;
  box-sizing: border-box;
  padding: 5px 15px 5px 50px;
  border-radius: 5px;
  background: ${props => props.theme.lighterBlockBackground};
  color: ${props => props.theme.fontColor};
  &:focus {
    outline: none;
    border-radius: 5px 5px 0 0;
  }
`
