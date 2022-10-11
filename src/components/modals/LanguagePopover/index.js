import { Autocomplete, Box, Popover, TextField } from "@mui/material"

const LanguageDialog = ({ anchorEl, options, value, onClose, onChange }) => {

    const handleChange = (e, v) => {
        onChange(e, v)
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
                    value={value}
                    options={options}
                    disableClearable
                    getOptionLabel={ option => option.title }
                    getOptionDisabled={ option => option.code === value.code }
                    isOptionEqualToValue={ (o, v) => o.title === v.title }
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant={"filled"}
                            label={"Choose Language"}
                        />
                    )}
                />
            </Box>
        </Popover>
    )
}

export default LanguageDialog