import * as React from "react"
import {
  SettingsPageWrapper,
  SettingsPageDiv,
  SettingItem,
  SettingsPageSpan,
  SettingsSelect,
  SelectOption,
} from "./SettingsPage-styles"
import { useState } from "react"

const SettingsPage = () => {
  const [selectedValue, setSelectedValue] = useState("18")
  return (
    <SettingsPageWrapper>
      <SettingsPageDiv>
        <SettingItem>
          <SettingsPageSpan>Select font-size:</SettingsPageSpan>
          <SettingsSelect value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
            <SelectOption value={"15"}>15px</SelectOption>
            <SelectOption value={"16"}>16px</SelectOption>
            <SelectOption value={"17"}>17px</SelectOption>
            <SelectOption value={"18"}>18px</SelectOption>
            <SelectOption value={"19"}>19px</SelectOption>
            <SelectOption value={"20"}>20px</SelectOption>
            <SelectOption value={"21"}>21px</SelectOption>
            <SelectOption value={"22"}>22px</SelectOption>
          </SettingsSelect>
        </SettingItem>
      </SettingsPageDiv>
    </SettingsPageWrapper>
  )
}

export default SettingsPage
