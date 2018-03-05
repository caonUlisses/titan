import { makeExecutableSchema } from 'graphql-tools'
import EventResolver from './../resolvers/event-resolver.js'

const typeDefs = `
  type Event {
    _id: String,
    title: String,
    allDay: Boolean,
    start: String,
    end: String
  }
  
  type Query {
    events: [Event]
    event(_id: String): Event
  }

  type Mutation {
    create(title: String, allDay: Boolean, start: String, end: String): Event
    update(_id: String!, title: String, allDay: Boolean, start: String, end: String): Event
    delete(_id: String!): Event
  }
`

const EventSchema = makeExecutableSchema({ typeDefs, resolvers: EventResolver })

export default EventSchema
