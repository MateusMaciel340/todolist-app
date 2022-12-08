import { useState } from "react";

import { Item } from "./types/Item";
import ListItem from "./components/ListItem/ListItem";
import AddArea from "./components/AddArea/AddArea";

import * as C from "./styles/AppStyle";

const App = () => {

    const [list, setList] = useState<Item[]>([
        { id: 1, name: "Estudar MySQL", done: false },
        { id: 2, name: "Estudar PHP", done: true }
    ]);

    const handleAddTask = (taskName: string) => {
        let newList = [...list];
        
        newList.push({
            id: list.length + 1, name: taskName,
            done: false
        });
        setList(newList);
    }

    const handleTaskChange = (id: number, done: boolean) => {
        let newList = [...list];

        for (let i in newList) {
            if (newList[i].id === id) {
                newList[i].done = done;
            }
        }

        setList(newList);
    }
    
    return (
        <C.Container className="Body">
            <C.Area>
                <C.Header>Lista de tarefas</C.Header>
                <AddArea onEnter={handleAddTask} />
                
                {list.map((item, index) => (
                    <ListItem
                        key={index}
                        item={item}
                        onChange={handleTaskChange}/>
                ))}
            </C.Area>
        </C.Container>
    );
}

export default App;