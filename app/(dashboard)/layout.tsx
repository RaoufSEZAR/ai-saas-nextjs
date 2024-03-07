import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative h-full">
			<div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-gray-900">
				<div className="">
					<Sidebar />
				</div>
			</div>
			<main className="md:pl-72">
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
