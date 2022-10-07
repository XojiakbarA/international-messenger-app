import { Avatar, ButtonBase, FormHelperText, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from "@mui/material"
import { forwardRef, useState } from "react"
import UploadIcon from '@mui/icons-material/Upload'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

const ImageUpload = forwardRef(({ preview, width, height, error, onImageChange, onDeleteClick, onRemoveClick }, ref) => {

    const [anchorEl, setAnchorEl] = useState(null)

    const handleImageChange = (e) => {
        onImageChange(e)
        setAnchorEl(null)
    }
    const handleDeleteClick = (e) => {
        onDeleteClick(e)
        setAnchorEl(null)
    }
    const handleRemoveClick = (e) => {
        onRemoveClick(e)
        setAnchorEl(null)
    }

    return (
        <Stack spacing={1} alignItems={"center"} ref={ref} position={"relative"}>
            <ButtonBase id={'image-menu-button'} onClick={ e => setAnchorEl(e.currentTarget) } sx={{ width: "100%" }}>
                <Avatar variant={"rounded"} sx={{ width, height }}/>
            </ButtonBase>
            <FormHelperText error>{error}</FormHelperText>
            <Menu
                id="image-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={ e => setAnchorEl(null) }
                MenuListProps={{ 'aria-labelledby': 'image-menu-button' }}
                anchorOrigin={{ vertical: "center", horizontal: "center" }}
            >
                <MenuItem component={"label"}>
                    <ListItemIcon><UploadIcon/></ListItemIcon>
                    <ListItemText>Upload</ListItemText>
                    <input accept="image/*" type="file" hidden onChange={handleImageChange}/>
                </MenuItem>
                <MenuItem onClick={ preview ? handleRemoveClick : handleDeleteClick }>
                    <ListItemIcon>
                        {
                            preview
                            ?
                            <RemoveCircleIcon/>
                            :
                            <DeleteIcon/>
                        }
                    </ListItemIcon>
                    <ListItemText>{ preview ? "Remove" : "Delete" }</ListItemText>
                </MenuItem>
            </Menu>
        </Stack>
    )
})

export default ImageUpload