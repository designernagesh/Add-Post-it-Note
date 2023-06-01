import { Box, Button, Card, CardHeader, CardBody, Text, Checkbox, Container, Flex, FormControl, FormLabel, HStack, Heading, Input, Select, Textarea, SimpleGrid } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import { useState } from 'react';

function App() {
  const colors = {
    'ambrosia':   '#FCDBBA',
    'banana':     '#FEE694',
    'blue tack':  '#82BFE0',
    'champagne':  '#FCEBD5',
    'ice':        '#E1EFF8',
    'mushroom':   '#EDE8D5',
    'pale lemon': '#F4FFDC',
    'petal':      '#F4E9F3',
    'pink':       '#FFC9D8',
    'posy':       '#DED7EC',
    'powder pink':'#FBD1D1',
    'primrose':   '#E1F7B0',
    'robins egg': '#B8DEE0',
    'sakura':     '#FFE4E4',
    'spearmint':  '#94E0CF'}
  const [ formData, setFormData ] = useState([]);
  const [ checked, setChecked ] = useState(false);
  const [ data, setData ] = useState({
    date: "",
    color: "",
    title: "",
    description: "",
  })

  const checkboxHandler = (e) => {
    setChecked(e.target.checked);
  }

  const changeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name] : e.target.value };
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let newFormData = formData;
    newFormData.push(data);
    setFormData( newFormData )
    // console.log(formData);

    setData({
      date: "",
      color: "",
      title: "",
      description: "",
    })
  }

  const deleteHandler = (e) => {
    // e.preventDefault();
    alert()
  }

  return (
    <Container maxW='2xl'>
      <Heading as='h1' align='center' my='20px'> Add Post-it Note </Heading>
      <Box boxShadow='outline' p='6' rounded='md' mb='20px'>
        <form onSubmit={submitHandler}>
          <Flex mb='20px'>
            <FormControl w='50%' isRequired>
              <FormLabel>Select Date: </FormLabel>
              <Input type='date' name='date' value={data.date} placeholder='Date' onChange={changeHandler} />
            </FormControl>
            <Box w='50%' display='flex' alignItems='center' justifyContent='flex-end'>
              <Checkbox defaultChecked onChange={checkboxHandler}>Is it Priority?</Checkbox>
            </Box>
          </Flex>

          <HStack mb='20px'>
            <FormControl w='50%'>
              <FormLabel>Pick the Color</FormLabel>
              <Select name='color' value={data.color} placeholder='Select Color' onChange={changeHandler}>
                {
                  Object.entries(colors).map(([key, value]) => {
                    return ( 
                      <option value={value}>{ key }</option>
                    )
                  }) 
                }
              </Select>
            </FormControl>

            <FormControl w='50%' isRequired>
              <FormLabel>Title</FormLabel>
              <Input type='text' name='title' value={data.title} placeholder='Title' onChange={changeHandler} />
            </FormControl>
          </HStack>

          <FormControl mb='20px'>
            <FormLabel>Description</FormLabel>
            <Textarea
              name='description'
              value={data.description}
              onChange={changeHandler}
              placeholder='Here is a sample placeholder'
              size='sm'
            />
          </FormControl>

          <Box display='flex' alignItems='center' justifyContent='flex-end'>
            <Button
              colorScheme='teal'
              type='submit'
            >
              Create Post-it
            </Button>
          </Box>
        </form>
      </Box>
    
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {
        formData.map(d => {
          return (
            <Card bg={d.color} color='blackAlpha.900'>
              <CardHeader>
                <Heading size='md'>
                  <Flex alignItems='center' justifyContent='space-between'>
                    {d.title}
                    <a href='#' onClick={deleteHandler}><DeleteIcon /></a> 
                  </Flex> 
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>{d.date}<br />{d.description}</Text>
              </CardBody>
            </Card>
          )
        })
      }
      </SimpleGrid>
          
        
    </Container>
  );
}

export default App;
