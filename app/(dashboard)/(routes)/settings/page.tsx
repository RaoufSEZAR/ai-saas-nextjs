import { Settings } from "lucide-react";

import Heading from "@/components/heading";
// import { SubscriptionButton } from "@/components/subscription-button";
// import { checkSubscription } from "@/lib/subscription";

const SettingsPage = () => {
	return (
		<div>
			<Heading
				title="Settings"
				description="Manage account settings."
				icon={Settings}
				iconColor="text-gray-700"
				bgColor="bg-gray-700/10"
			/>
		</div>
	);
};

export default SettingsPage;
