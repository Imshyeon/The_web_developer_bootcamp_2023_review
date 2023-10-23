# SQL vs. noSQL
1. SQL(Structured Query Language) : 구조화된 쿼리 언어, 즉 기본적인 구문을 공유하는 관계형 데이터데이스.
2. noSQL : 구조화된 쿼리 언어를 쓰지 않고 많은 요소를 포괄하는 방식. 따로 테이블을 만들어서 따라야 할 스키마와 패턴을 미리 정하지 않아도 된다. 


# MongoDB
## 1. insert
```shell
test> use aniamlShelter
animalShelter> show dbs
#==============================
animalShelter> db.dogs.insertOne({name : "Charlie", age : 3, breed : "corgi", catFriendly:true})  #dogs : collection -> 강아지 집합,,
{
  acknowledged: true,
  insertedId: ObjectId("6528e122d182cb9a6c9b1cb7")
}
animalShelter> show collections
dogs
animalShelter> db.dogs.find()
[
  {
    _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
    name: 'Charlie',
    age: 3,
    breed: 'corgi',
    catFriendly: true
  }
]
#==============================
animalShelter> db.dogs.insertMany([{name:"Wyatt", breed:"Golden", age:14,catFriendly:false}, {name:"Tonya", breed:"Chihuahua", age:17, catFriendly:true}])
#==============================
animalShelter> db.dogs.find()
[
  {
    _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
    name: 'Charlie',
    age: 3,
    breed: 'corgi',
    catFriendly: true
  },
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb8"),
    name: 'Wyatt',
    breed: 'Golden',
    age: 14,
    catFriendly: false
  },
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb9"),
    name: 'Tonya',
    breed: 'Chihuahua',
    age: 17,
    catFriendly: true
  }
]
#==============================
animalShelter> db.cats.insertOne({name:"Blue Steele", age:6, dogFriendly:false,breed:"Scottish fold"})
{
  acknowledged: true,
  insertedId: ObjectId("6528e2c2d182cb9a6c9b1cba")
}
#==============================
animalShelter> db.cats.find()
[
  {
    _id: ObjectId("6528e2c2d182cb9a6c9b1cba"),
    name: 'Blue Steele',
    age: 6,
    dogFriendly: false,
    breed: 'Scottish fold'
  }
]
```

## 2. find
```shell
animalShelter> db.cats.find() # db.cats.find({})와 같은 결과
[
  {
    _id: ObjectId("6528e2c2d182cb9a6c9b1cba"),
    name: 'Blue Steele',
    age: 6,
    dogFriendly: false,
    breed: 'Scottish fold'
  }
]
#==============================
animalShelter> db.dogs.find()
[
  {
    _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
    name: 'Charlie',
    age: 3,
    breed: 'corgi',
    catFriendly: true
  },
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb8"),
    name: 'Wyatt',
    breed: 'Golden',
    age: 14,
    catFriendly: false
  },
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb9"),
    name: 'Tonya',
    breed: 'Chihuahua',
    age: 17,
    catFriendly: true
  }
]
#==============================
animalShelter> db.dogs.find({breed:"corgi"})
[
  {
    _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
    name: 'Charlie',
    age: 3,
    breed: 'corgi',
    catFriendly: true
  }
]
#==============================
animalShelter> db.dogs.find({catFriendly:true})
[
  {
    _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
    name: 'Charlie',
    age: 3,
    breed: 'corgi',
    catFriendly: true
  },
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb9"),
    name: 'Tonya',
    breed: 'Chihuahua',
    age: 17,
    catFriendly: true
  }
]
#==============================
animalShelter> db.dogs.findOne({catFriendly:true})
{
  _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
  name: 'Charlie',
  age: 3,
  breed: 'corgi',
  catFriendly: true
} 
#==============================
animalShelter> db.dogs.find({catFriendly:true,age:17})
[
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb9"),
    name: 'Tonya',
    breed: 'Chihuahua',
    age: 17,
    catFriendly: true
  }
]
```

## 3. Update
```shell
animalShelter> db.dogs.updateOne({name:"Charlie"},{$set: {age:4}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

animalShelter> db.dogs.find({name:"Charlie"})
[
  {
    _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
    name: 'Charlie',
    age: 4,
    breed: 'corgi',
    catFriendly: true
  }
]
#==============================
animalShelter> db.dogs.updateOne({name:"Charlie"}, {$set : {age: 5, breed:'Lab'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

animalShelter> db.dogs.find({name:"Charlie"})
[
  {
    _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
    name: 'Charlie',
    age: 5,
    breed: 'Lab',
    catFriendly: true
  }
]
#==============================
animalShelter> db.dogs.updateOne({name:"Charlie"}, {$set : {color : 'chocolate'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
animalShelter> db.dogs.find({name:'Charlie'})
[
  {
    _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
    name: 'Charlie',
    age: 5,
    breed: 'Lab',
    catFriendly: true,
    color: 'chocolate'
  }
]
#==============================
animalShelter> db.dogs.updateMany({catFriendly:true}, {$set:{isAvaliable:false}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
animalShelter> db.dogs.find()
[
  {
    _id: ObjectId("6528e122d182cb9a6c9b1cb7"),
    name: 'Charlie',
    age: 5,
    breed: 'Lab',
    catFriendly: true,
    color: 'chocolate',
    isAvaliable: false
  },
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb8"),
    name: 'Wyatt',
    breed: 'Golden',
    age: 14,
    catFriendly: false
  },
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb9"),
    name: 'Tonya',
    breed: 'Chihuahua',
    age: 17,
    catFriendly: true,
    isAvaliable: false
  }
]
#==============================
animalShelter> db.cats.updateOne({age:6}, {$set: {age:7}, $currentDate : {lastChanged : true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
animalShelter> db.cats.find()
[
  {
    _id: ObjectId("6528e2c2d182cb9a6c9b1cba"),
    name: 'Blue Steele',
    age: 7,
    dogFriendly: false,
    breed: 'Scottish fold',
    lastChanged: ISODate("2023-10-13T07:34:39.222Z")
  }
]
```

## 4. Delete
```shell
animalShelter> db.cats.deleteOne({name:"Blue Steele"})
{ acknowledged: true, deletedCount: 1 }
animalShelter> db.cats.find()
#==============================
animalShelter> db.dogs.deleteMany({isAvaliable:false})
{ acknowledged: true, deletedCount: 2 }
animalShelter> db.dogs.find()
[
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb8"),
    name: 'Wyatt',
    breed: 'Golden',
    age: 14,
    catFriendly: false
  }
]
#==============================
animalShelter> db.dogs.insert({sadjf:12345, dfjsklf:'dsijfoaf'})
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("6528f4a2b113e221dc9a1192") }
}
animalShelter> db.dogs.find()
[
  {
    _id: ObjectId("6528e22cd182cb9a6c9b1cb8"),
    name: 'Wyatt',
    breed: 'Golden',
    age: 14,
    catFriendly: false
  },
  {
    _id: ObjectId("6528f4a2b113e221dc9a1192"),
    sadjf: 12345,
    dfjsklf: 'dsijfoaf'
  }
]
animalShelter> db.dogs.deleteMany({})
{ acknowledged: true, deletedCount: 2 }
animalShelter> db.dogs.find()
```

## 5. 기타 Mongo 연산자
```shell
db.dogs.insertMany( [
   {name:'Rusty', breed: 'Mutt', age:3, weight:25, size:'M', personality:{catFriendly:true, childFriendly:true}},
   {name:'Chungus', breed: 'Husky', age:3, weight:65, size:'L', personality:{catFriendly:false, childFriendly:true}},
   {name:'Bella', breed: 'Chihuahua', age:8, weight:7, size:'S', personality:{catFriendly:false, childFriendly:false}},
   {name:'Malakai', breed: 'Great Pyrenees', age:2, weight:110, size:'L', personality:{catFriendly:false, childFriendly:true}},
   {name:'Dodger', breed: 'Corgi', age:10, weight:31, size:'M', personality:{catFriendly:true, childFriendly:true}},
   {name:'Mishka', breed: 'Corgi', age:13, weight:27, size:'M', personality:{catFriendly:true, childFriendly:true}},
] );
#==============================
animalShelter> db.dogs.find({'personality.childFriendly':true})
[
  {
    _id: ObjectId("6528f646b113e221dc9a1193"),
    name: 'Rusty',
    breed: 'Mutt',
    age: 3,
    weight: 25,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1194"),
    name: 'Chungus',
    breed: 'Husky',
    age: 3,
    weight: 65,
    size: 'L',
    personality: { catFriendly: false, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1196"),
    name: 'Malakai',
    breed: 'Great Pyrenees',
    age: 2,
    weight: 110,
    size: 'L',
    personality: { catFriendly: false, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1197"),
    name: 'Dodger',
    breed: 'Corgi',
    age: 10,
    weight: 31,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1198"),
    name: 'Mishka',
    breed: 'Corgi',
    age: 13,
    weight: 27,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  }
]
#==============================
animalShelter> db.dogs.find({'personality.childFriendly':true, size:'M'})
[
  {
    _id: ObjectId("6528f646b113e221dc9a1193"),
    name: 'Rusty',
    breed: 'Mutt',
    age: 3,
    weight: 25,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1197"),
    name: 'Dodger',
    breed: 'Corgi',
    age: 10,
    weight: 31,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1198"),
    name: 'Mishka',
    breed: 'Corgi',
    age: 13,
    weight: 27,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  }
]
#==============================
animalShelter> db.dogs.find({age:{$gt:8}})
[
  {
    _id: ObjectId("6528f646b113e221dc9a1197"),
    name: 'Dodger',
    breed: 'Corgi',
    age: 10,
    weight: 31,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1198"),
    name: 'Mishka',
    breed: 'Corgi',
    age: 13,
    weight: 27,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  }
]
#==============================
animalShelter> db.dogs.find({age:{$lte:8}})
[
  {
    _id: ObjectId("6528f646b113e221dc9a1193"),
    name: 'Rusty',
    breed: 'Mutt',
    age: 3,
    weight: 25,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1194"),
    name: 'Chungus',
    breed: 'Husky',
    age: 3,
    weight: 65,
    size: 'L',
    personality: { catFriendly: false, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1195"),
    name: 'Bella',
    breed: 'Chihuahua',
    age: 8,
    weight: 7,
    size: 'S',
    personality: { catFriendly: false, childFriendly: false }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1196"),
    name: 'Malakai',
    breed: 'Great Pyrenees',
    age: 2,
    weight: 110,
    size: 'L',
    personality: { catFriendly: false, childFriendly: true }
  }
]
#==============================
animalShelter> db.dogs.find({breed:{$in:['Mutt','Corgi']}})
[
  {
    _id: ObjectId("6528f646b113e221dc9a1193"),
    name: 'Rusty',
    breed: 'Mutt',
    age: 3,
    weight: 25,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1197"),
    name: 'Dodger',
    breed: 'Corgi',
    age: 10,
    weight: 31,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1198"),
    name: 'Mishka',
    breed: 'Corgi',
    age: 13,
    weight: 27,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  }
]
#==============================
animalShelter> db.dogs.find({breed:{$in:['Mutt','Corgi']},age:{$lt:10}})
[
  {
    _id: ObjectId("6528f646b113e221dc9a1193"),
    name: 'Rusty',
    breed: 'Mutt',
    age: 3,
    weight: 25,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  }
]
#==============================
animalShelter> db.dogs.find({breed:{$nin:['Mutt','Corgi']}})
[
  {
    _id: ObjectId("6528f646b113e221dc9a1194"),
    name: 'Chungus',
    breed: 'Husky',
    age: 3,
    weight: 65,
    size: 'L',
    personality: { catFriendly: false, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1195"),
    name: 'Bella',
    breed: 'Chihuahua',
    age: 8,
    weight: 7,
    size: 'S',
    personality: { catFriendly: false, childFriendly: false }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1196"),
    name: 'Malakai',
    breed: 'Great Pyrenees',
    age: 2,
    weight: 110,
    size: 'L',
    personality: { catFriendly: false, childFriendly: true }
  }
]
#==============================
animalShelter> db.dogs.find({$or:[{'personality.catFriendly':true}, {age:{$lte:2}}]})
[
  {
    _id: ObjectId("6528f646b113e221dc9a1193"),
    name: 'Rusty',
    breed: 'Mutt',
    age: 3,
    weight: 25,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1196"),
    name: 'Malakai',
    breed: 'Great Pyrenees',
    age: 2,
    weight: 110,
    size: 'L',
    personality: { catFriendly: false, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1197"),
    name: 'Dodger',
    breed: 'Corgi',
    age: 10,
    weight: 31,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  },
  {
    _id: ObjectId("6528f646b113e221dc9a1198"),
    name: 'Mishka',
    breed: 'Corgi',
    age: 13,
    weight: 27,
    size: 'M',
    personality: { catFriendly: true, childFriendly: true }
  }
]

```

# Mongo Relationship

1. One to Many
- farm.js
  ```shell
  % node farm.js
  MONGO CONNECTION OPEN
  {
    name: 'Full Belly Farms',
    city: 'Guinda, CA',
    products: [
      {
        name: 'Goddess Melon',
        price: 4.99,
        season: 'Summer',
        _id: new ObjectId("65361d6790a2e6718c564e23"),
        __v: 0
      }
    ],
    _id: new ObjectId("65361fa7763da116f9211ab1"),
    __v: 0
  }

  # ----- 실제 mongodb 내 -----

    relationshopDemo> db.farms.find()
  [
    {
      _id: ObjectId("65361fa7763da116f9211ab1"),
      name: 'Full Belly Farms',
      city: 'Guinda, CA',
      products: [ ObjectId("65361d6790a2e6718c564e23") ],
      __v: 0
    }
  ]
  ```