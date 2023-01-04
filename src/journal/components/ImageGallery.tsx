import { ImageList, ImageListItem } from "@mui/material";
import { Note } from "../../store/journal";

export const ImageGallery = ({ imageUrls, id }: Partial<Note>) => {
	return (
		<ImageList sx={{ width: "100%", height: 450 }} cols={4} rowHeight={164}>
			{!!imageUrls &&
				imageUrls.map((imageURL, index) => (
					<ImageListItem key={`${id}-${index}`} placeholder={`imagen-${index}`}>
						<img
							src={`${imageURL}?w=164&h=164&fit=crop&auto=format`}
							srcSet={`${imageURL}?w=180&h=164&fit=crop&auto=format&dpr=2 2x`}
							alt={`imagen-${index}`}
							loading="lazy"
						/>
					</ImageListItem>
				))}
		</ImageList>
	);
};
