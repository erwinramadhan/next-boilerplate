import ILayout from "@/interfaces/layout"

export default function LoginRegisterLayout({ children }: ILayout) {
    return (
        <div className="text-blue-500">
            {children}
        </div>
    )
}