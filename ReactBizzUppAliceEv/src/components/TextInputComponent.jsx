import { Grid, TextField, Alert } from "@mui/material";
import PropTypes from "prop-types";

const TextInputComponent = ({
  xs,
  sm,
  id,
  label,
  autoFocus,
  value,
  onChange,
  onBlur,
  errors,
}) => {
  return (
    <Grid item xs={xs} sm={sm}>
      <TextField
        name={id}
        required
        fullWidth
        id={id}
        label={label}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && <Alert severity="error">{errors}</Alert>}
    </Grid>
  );
};

TextInputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  onBlur: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};

TextInputComponent.defaultProps = {
  xs: 12,
  sm: 6,
  autoFocus: false,
};

export default TextInputComponent;
