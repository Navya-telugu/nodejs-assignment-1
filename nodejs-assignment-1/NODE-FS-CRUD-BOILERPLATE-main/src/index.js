const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	await fs.writeFile(fileName,fileContent)
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	const data= await fs.readFile(fileName,"utf-8")
	console.log(data)
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile(fileName,fileContent)
	console.log("Text Update Successfully")
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	await fs.unlink(fileName)
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

myFileWriter("text.txt","Hello")

myFileUpdater("text.txt","World")
//myFileReader("text.txt")
//myFileDeleter("text.txt")





