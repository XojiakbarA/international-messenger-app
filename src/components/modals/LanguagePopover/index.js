import {Autocomplete, Box, CircularProgress, Popover, TextField} from "@mui/material"
import {useSelector} from "react-redux"
import {chatsSelector, languagesSelector} from "../../../store/selectors"

const LanguageDialog = ({ anchorEl, onClose }) => {

    const { single: chat } = useSelector(chatsSelector)
    const { loading, list: languages } = useSelector(languagesSelector)

    const handleChange = async (e, language) => {
        console.log(language)
        onClose()
    }

    return (
        <Popover
            id={"lang-popover"}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Box width={300} p={2}>
                <Autocomplete
                    loading={loading}
                    value={chat?.locale}
                    options={languages}
                    disableClearable
                    getOptionLabel={ option => option.languageName }
                    getOptionDisabled={ option => option?.languageCode === chat?.locale?.languageCode }
                    isOptionEqualToValue={ (o, v) => o.languageCode === v.languageCode }
                    onChange={handleChange}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option?.languageCode.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option?.languageCode.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {option?.languageName}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant={"filled"}
                            label={"Choose Language"}
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                />
            </Box>
        </Popover>
    )
}

export default LanguageDialog