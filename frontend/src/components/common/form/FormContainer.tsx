import { Button } from "@mui/material";

interface FormContainerProps {
    submitLabel: string;
    onSubmit: () => void;
    isSubmitting: boolean;
    children: React.ReactNode;
}

export const FormContainer: React.FC<FormContainerProps> = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            {props.children}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={props.isSubmitting}
            >
                {props.submitLabel}
            </Button>
        </form>
    );
}
