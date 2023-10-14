import ILayout from "@/interfaces/layout"

export default function DashboardLayout({ children }: ILayout) {
    return (
        <div className="text-red-500 bg-white">
            {children}
        </div>
    )
}