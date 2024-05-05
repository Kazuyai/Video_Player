const openFile = () => {
    console.log("openFile");
    const fileUploader = document.getElementById("file-uploader") as HTMLInputElement;
    if(!fileUploader.files) return;
    console.log(fileUploader.files[0]);
}