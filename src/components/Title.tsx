type TitleProps = {
    children: string;
}
export function Title({ children }: TitleProps) {
    return (
        <h2 className="font-title italic text-2xl text-center my-10">{children} </h2>
    )
}
