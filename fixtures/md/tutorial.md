# tutorial

> tutorial.namespace.for.cpp

> tutorial.namespace.for.d

> tutorial.namespace.for.dart

> tutorial.namespace..for.java

> tutorial.namespace.for.php

> tutorial.namespace.for.perl

> tutorial.namespace.for.haxe

> tutorial.namespace.for.netcore

[[_TOC_]]
## Types

### MyInteger

<div style="padding:5px; background-color:ButtonFace; color:ButtonText">

Thrift lets you do typedefs to get pretty names for your types. Standard C style here.
</div>

> i32 MyInteger

## Constants

| Constant | Type | Description | Value |
| -------- | ---- | ----------- | ----- |
| INT32CONSTANT | i32 | Thrift also lets you define constants for use across languages. Complex types and structs are specified using JSON notation. | "[object Object]" |
| MAPCONSTANT | map<string> |  | map<[undefined](#undefined)> |
| UNIFIED_TREE_NAMES | string | Test a set of trees And check all is fine | "TestingTrees" |

## Enumerations

### Operation

<div style="padding:5px; background-color:ButtonFace; color:ButtonText">

You can define enums, which are just 32 bit integers. Values are optional and start at 1 if not supplied, C style again.
</div>

| Named Constant | Description |
| -------------- | ----------- |
| ADD |  |
| SUBTRACT |  |
| MULTIPLY |  |
| DIVIDE |  |

### FruitType

<div style="padding:5px; background-color:ButtonFace; color:ButtonText">

Another case of header comments. This time on an enum.
</div>

| Named Constant | Description |
| -------------- | ----------- |
| Apple | a category |
| Orange | include comma, not needed |

## Data Structures

### Work

<div style="padding:5px; background-color:ButtonFace; color:ButtonText">

Structs are the basic complex data structures. They are comprised of fields which each have an integer identifier, a type, a symbolic name, and an optional default value. * Fields can be declared "optional", which ensures they will not be included in the serialized output if they aren't set.  Note that this requires some manual management in some languages. can use "required" instead of blank
</div>

| Key | Field | Type | Description | Required | Default value |
| --- | ----- | ---- | ----------- | -------- | ------------- |
| 1 | num1 | i32 |  |  | 0 |
| 2 | num2 | i32 |  | required |  |
| 3 | op | [Operation](#Operation) |  | required |  |
| 4 | comment | string |  | optional |  |
| 5 | fruitName | string |  | required | Grape |

## Services

### Calculator

#### Function: ping

> void ping() 

#### Function: add

> i32 add(i32 num1, i32 num2) 

#### Function: calculate

> i32 calculate(i32 logid, [Work](#Work) w) throws [InvalidOperation](#InvalidOperation) ouch

#### Function: zip

> void zip() 
