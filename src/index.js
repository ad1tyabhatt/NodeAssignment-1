const fs = require('fs/promises')
// const fs = require('fs');

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	fs.writeFile(fileName,fileContent,(err)=>{
		console.log(err)
		console.log('file is created')
	})
	// dont chnage function name
}
myFileWriter('test.txt','this is a test file');

const myFileReader = async (fileName) => {
	// write code here

	fs.readFile(fileName,'utf-8',(err)=>{
		if(err){
			return
		}
		console.log('file is read')
	})
	// dont chnage function name
}

myFileReader("./test.txt");


const myFileUpdater = async (fileName, fileContent) => {
	// write code here

	fs.appendFile(fileName,fileContent,(err,res)=>{
		console.log(err)
	})
	// dont chnage function name
}
myFileUpdater('./test.txt',"\nNew line is added \nThis line will be removed");


const myFileDeleter = async (fileName) => {
	// write code here

	fs.unlink(fileName,(err)=>{
		console.log(err)
	})
	// dont chnage function name
}

myFileDeleter("./deleteThisFile.txt");


//* code to add "deleteThisFile.txt"

fs.writeFile('./deleteThisFile.txt','This is the content of delete file',(err=>{
	console.log(err)
}))

/*

	* to delete 'deleteThisFile.txt'

	fs.unlink("./deleteThisFile.txt",(err)=>{
		console.log(err)
	})

*/


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }