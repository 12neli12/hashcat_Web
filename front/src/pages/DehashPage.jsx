import Dehasher from "../components/Dehasher"
import AttackVectorInfo from "../components/AttackVector"
import HashTable from "../components/HashTable"
import Layout from "../Layout"; 
import Intro from "../components/Intro"

function DehashPage(){
  return(
    <Layout>
      <Intro />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Dehasher />
          </div>
          <div className="col-md-6">
            <AttackVectorInfo />
          </div>
        </div>
      </div>
      <HashTable />
    </Layout>
    
  )
}

export default DehashPage
