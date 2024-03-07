import  Heading from "@/components/heading";
import { FileAudio } from "lucide-react";

const VideoPage = () => {
	return (
		<div>
			<Heading
				title="Video Generation"
				description="Turn your prompt into video."
				icon={FileAudio}
				iconColor="text-orange-700"
				bgColor="bg-orange-700/10"
			/>
		</div>
	);
};

export default VideoPage;
