import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
  FormError,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

import BlogLayout from 'src/layouts/BlogLayout'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('Thank you for your submission!')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <BlogLayout>
      <Form
        validation={{ mode: 'onBlur' }}
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <Label errorClassName="text-red-600 font-bold" name="name">
          Name
        </Label>
        <TextField
          errorClassName="border-red-600 border-solid border-2 my-2"
          validation={{ required: true }}
          className="border-gray-700 border-solid border my-2"
          name="name"
        />
        <FieldError className="text-red-600 font-bold" name="name" />
        <Label errorClassName="text-red-600 font-bold" name="email">
          Email
        </Label>
        <TextField
          errorClassName="border-red-600 border-solid border-2 my-2"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          className="border-gray-700 border-solid border my-2"
          name="email"
        />
        <FieldError className="text-red-600 font-bold" name="email" />
        <Label errorClassName="text-red-600 font-bold" name="message">
          Message
        </Label>
        <TextAreaField
          errorClassName="border-red-600 border-solid border-2 my-2"
          validation={{ required: true }}
          className="border-gray-700 border-solid border my-2"
          name="message"
        />
        <FieldError className="text-red-600 font-bold" name="message" />
        <Submit
          disabled={loading}
          className="mt-4 focus:flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition duration-150 ease-in-out md:py-2 md:text-lg md:px-4"
        >
          Save
        </Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
