import { Download, ImageIcon } from "lucide-react";
import Heading from "@/components/heading";

const ImagePage = () => {
	return (
		<div>
			{" "}
			<Heading
				title="Image Generation"
				description="Turn your prompt into an image."
				icon={ImageIcon}
				iconColor="text-pink-700"
				bgColor="bg-pink-700/10"
			/>{" "}
		</div>
	);
};

export default ImagePage;
