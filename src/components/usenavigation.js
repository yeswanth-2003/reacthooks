import { useNavigate, useNavigation } from "react-router-dom";

function Page1(){
const navigation = useNavigate();

const pageup=()=>{
    navigation("/page2");
}

return(
    <div>
    <h1>PAGE 1</h1>
    <button onClick={pageup}>GO TO NEXT PAGE</button>
    </div>
);

}


function Page2(){
    const navigation = useNavigate();

    const pageback=()=>{
        navigation("/");
    }
return(
    <div>
    <h1>PAGE 2</h1>
    <button onClick={pageback}>GO TO PREVIOUS PAGE</button>
    </div>
)
}


export { Page1,Page2 }
// export default Page2