## Single ouput report on multiple server nodes 

The input is a JSON object where keys are node names and values are the results from each node. A result is a JSON object with arbitrary keys and string values. The output should be a JSON object where top level keys are the keys present in the results, the value of each should be an object mapping the different values present to the results to an array of nodes with those values. You can write the script in any language you choose but it should be runnable as ```cat input.json | script-name``` or (using Python as an example) a similar Windows command like ``` type input.json | python script-name ``` Include the script, a short readme and any other associated files in a zip or tar archive or link to a github repo or gist.

### Requirements:
This program requires Node.js.
The program should be run in the command line.  

## Running the Script:
The script should be run with the following command:
```command line
:~$ cat input.json | node nodeScript.js
```

## Author 
Jenna Tucker @ jenna.m.tucker@gmail.com || 857-366-0630

## Acknowledgements

George Ornbo online sample code for piping data to a Node.js script using the command line:  

https://shapeshed.com/command-line-utilities-with-nodejs/#piping-data

Thank you to Michael Smith and Lauren Wordell at Puppet.  
