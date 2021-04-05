import React,{useState,useContext} from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../../styles/styles_for_specific_components/language_switch.css'
import {LanguageContext} from '../../utils/context_api/LanguageContext'
import {HiTranslate} from 'react-icons/hi'



function LanguageSwitch() {

  const {language,setLanguage} = useContext(LanguageContext)

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    localStorage.setItem("gogoume-selected-language", event.target.value)
    setLanguage(event.target.value)
    setOpen(false)
  };

  return (
    <div className="inline-flex items-center mx-auto py-10">
    <HiTranslate style={{fontSize: "3rem"}} className="text-white mr-2"/>
    <FormControl>
        <Select
          id="select-language"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={language}
          onChange={handleChange}
        >
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"Japanese"}>日本語</MenuItem>
        </Select>
    </FormControl>
    </div>
  )
}

export default LanguageSwitch
