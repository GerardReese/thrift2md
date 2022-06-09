import { parse } from 'path'

import {
    loadFile,
    parseThrift,
    transformDoc,
    writeFile,
} from '../main/'

import { ThriftDocument } from '@creditkarma/thrift-parser';

const args = process.argv.slice(2)
const fileName = args[0]
const outputDir = args[1] ? (args[1].toString().endsWith('/') ? args[1] : args[1] + "/") : './'
const outputFile = outputDir + `${parse(fileName).name}.md`

const logDoc = (doc: ThriftDocument) => {
    console.dir(doc, {depth: null})
    return Promise.resolve(doc)
}

loadFile(fileName)
    .then(parseThrift)
    .then(transformDoc(fileName))
    .then(writeFile(outputFile))
    .then(console.log)
    .catch(console.error)
