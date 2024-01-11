try {
    NonFindingFunction()
} catch (error) {
    document.write(error.message + "<br>")
    document.write(error.stack + "<br>")
    document.write(error + "<br>")
}