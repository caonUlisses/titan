import Event from './../../models/Event.js'

const EventResolver = {
  Query: {
    events: async () => {
      try {
        return await Event.find({})
      } catch (error) { throw new Error(error) }
    },
    event: async (_id) => {
      try {
        const event = await Event.findById(_id)
        if (!event) { throw new Error('Evento não encontrado') }
        return event
      } catch (error) { throw new Error(error) }
    }
  },
  Mutation: {
    create: async (root, { title, allDay, start, end }) => {
      try {
        return await new Event({ title, allDay, start, end }).save()
      } catch (error) { throw new Error(error) }
    },
    update: async (root, { _id, title, allDay, start, end }) => {
      try {
        return await Event.findByIdAndUpdate(_id, { title, allDay, start, end })
      } catch (error) { throw new Error(error) }
    },
    delete: async (root, { _id }) => {
      try {
        return await Event.findByIdAndRemove(_id)
      } catch (error) { throw new Error(error) }
    }
  }
}

export default EventResolver
