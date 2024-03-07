import Heading from "@/components/heading";
import { Code } from "lucide-react";

const CodePage = () => {
	return (
		<div>
			<Heading
				title="Code Generation"
				description="Generate code using descriptive text."
				icon={Code}
				iconColor="text-green-700"
				bgColor="bg-green-700/10"
			/>{" "}
		</div>
	);
};

export default CodePage;
