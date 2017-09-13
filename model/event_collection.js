"use strict"
const dbConnect = require('../config/database')
const collection = dbConnect.get('Events')


 class EventsCollection {
  static findAll (cb){

    collection.find({}, cb)
  }

  static create (data, cb) {
    collection.insert(data, cb)
  }

//   static findById (id, cb) {
//     collection.findOne(id, cb)
//   }

//   static update (id, update, cb) {
//     collection.findAndModify({
//       query : { _id: id},
//       update : { '$set': update }
//     }, cb)
//   }

//   static delete (id, cb) {
//     collection.remove({_id: id}, cb)
//   }

}

module.exports = EventsCollection