import { MainNavigation } from "./MainNavigation";

export function Layout(props){
    return(
        <div>
            <MainNavigation />
            <main className="p-10">
                {props.children}
            </main>
        </div>
    )
}