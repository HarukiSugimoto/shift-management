import { TextField } from "@mui/material";
import { Controller, useController, type Control } from "react-hook-form";

interface FormTextFieldProps {
    name: string;
    control: Control<any>;
    label: string;

}

export const FormTextField: React.FC<FormTextFieldProps> = (props) => {
    const { fieldState: { error }, } = useController({
        name: props.name,
        control: props.control
    });
    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={props.label}
                    variant="outlined"
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : ''}
                    margin="normal"
                />
            )}
        />
    );
}
