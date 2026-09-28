import header from "../components/header"
import footer from "../components/footer"

export default function Layout({content}){
    return (
        <>
        <header/>
        {content}
        <footer/>
        </>
    )
}