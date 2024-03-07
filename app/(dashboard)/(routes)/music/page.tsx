import { useRouter } from "next/navigation";
import { Music, Send } from "lucide-react";

import Heading from "@/components/heading";
const MusicPage = () => {
	return (
		<div>
			<Heading
				title="Music Generation"
				description="Turn your prompt into music."
				icon={Music}
				iconColor="text-emerald-500"
				bgColor="bg-emerald-500/10"
			/>
		</div>
	);
};

export default MusicPage;
