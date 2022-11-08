import { Button, Card, Container, Grid } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function index({ tasks }) {

  const router = useRouter();

  if (tasks.length === 0) return (
    <Grid
      centered
      verticalAlign='middle'
      columns={1}
      style={{ height: "80vh" }}>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <h1>No hay tareas</h1>
          <img src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png"
            alt="No Data" />
          <div>
            <Button onClick={() => router.push('/tasks/new')} >Crear Tarea</Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
  //render a list of tasks
  return (
    <div>
      <Container style={{ padding: "20px" }}>
        <Card.Group itemsPerRow={4}>
          {
            tasks.map(task => (
              <Card key={task._id}>
                <Card.Content>
                  <Card.Header>{task.title}</Card.Header>
                  <Card.Description>{task.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button primary onClick={() => router.push(`/tasks/${task._id}`)}>View</Button>
                  <Button primary onClick={() => router.push(`/tasks/${task._id}/edit`)}>Edit</Button>

                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
      </Container>
    </div>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/tasks')
//   const tasks = await res.json();

//   console.log(tasks);

//   return {
//     props: {}
//   }
//}

export const getServerSideProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks = await res.json();

  return {
    props: {
      tasks
    }
  }
}
