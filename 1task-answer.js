db.getCollection('companies').aggregate([
    {$match:{"relationships.person.permalink":"eric-di-benedetto"}},
    {$project:{"name":"$name", "founded_year":"$founded_year"}},
    {$group:{_id:"$name","field":{$sum:"$founded_year"}}}
    ])



b.getCollection('companies').aggregate([
    {$match:{"relationships.person.permalink":"eric-di-benedetto"}},
    {$project:{"name":"$name"}},
    {$group:{_id:"$name"}}
    ])

db.getCollection('companies').aggregate([
    {$match:{"relationships.person.permalink":"eric-di-benedetto"}},
    {$project:{"name":"$name"}},
    {$group:{_id:"$name"}},{$group:{_id: null, count: {$sum:1}}}
    ])