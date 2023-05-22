function AlertButton({message, children}){
    return(
        <button onClick={()=> alert(message)}>
            { children }
        </button>
    );
}
function PlayButton({ movieName })
{
    function handlePlayClick(){
        alert('Playing ${movieName}!')
    }
    return (
        <button onClick={handlePlayClick}>
            Play "{movieName}"
        </button>
    );
}
function UploadButton(){
    return(
        <button onClick={() => alert('Uploading!')}>Uplaoad Image</button>
    )
}
function Button({ onClick, children }){
    return(
        <button onClick={onClick}>
            { children }
        </button>
    );
}
function Toolbar({ onPlayMovie, onUploadImage }){
    return(
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    );
}
export default function EventTest(){
    // function handleClick(){
    //     alert("You clicked me!");
    // }
    
    return(
        <>
            {/* <button onClick={handleClick}>Click me</button>
            <button onClick={()=>{
                alert("You clicked me!");
            }}>
                Click me again
            </button> */}

            {/* <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton> */}

            {/* <PlayButton movieName="KiKi's Delivery Service"/>
            <UploadButton /> */}

            <Toolbar 
                onPlayMovie={() => alert('Playing!')}
                onUploadImage={() => alert('Uploading!')}
            />
        </>
    )
}