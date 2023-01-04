import React from "react";

export const fileUpload = async (file: File) => {
	const cloudURL = `https://api.cloudinary.com/v1_1/dnlmu55ps/image/upload`;

	const formData = new FormData();

	formData.append("upload_preset", "react-journal");
	formData.append("file", file);

	try {
		const resp = await fetch(cloudURL, { method: "POST", body: formData });

		if (!resp.ok) throw new Error("No se ha podido subir la/s imagen/es");

		const cloudResponse = resp.json();

		return cloudResponse;
	} catch (error) {
		console.log(error);
		throw new Error();
	}
};
