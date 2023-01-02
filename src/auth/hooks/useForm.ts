import { ChangeEvent, useEffect, useMemo, useState } from "react";

export const useForm = (
	initialValues: { [key: string]: string },
	formValidations?: { [key: string]: any[] }
) => {
	const [formState, setFormState] = useState(initialValues);
	const [formValidation, setFormValidation] = useState<any>({});
	const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

	const isFormValid = useMemo(() => {
		if (!!formValidations) {
			for (const formField of Object.keys(formValidation)) {
				if (formValidation[formField] !== null) return false;
			}
		}
		return true;
	}, [formValidation]);

	useEffect(() => {
		!!formValidations && createValidations();
	}, [formState]);

	useEffect(() => {
		setFormState(initialValues);
	}, [initialValues]);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const name = event.target.name;
		setFormState({ ...formState, [name]: value });
	};

	const onResetForm = () => {
		setFormState(initialValues);
	};

	const createValidations = () => {
		const formCheckedValues: any = {};

		for (const formField of Object.keys(formValidations!)) {
			const [fn, errorMessage] = formValidations![formField];

			formCheckedValues[`${formField}Valid`] = fn(formState[formField])
				? null
				: errorMessage;
		}

		setFormValidation(formCheckedValues);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,

		...formValidation,
		formValidation,
		isFormValid,
		isFormSubmitted,
		setIsFormSubmitted,
	};
};
