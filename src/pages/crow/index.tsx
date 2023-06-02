import Layout from "~/layouts"
import React, { useState } from "react";
import Modal from "~/components/Modal";
import Button from "~/components/Buttons";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Input from "~/components/Inputs";

type Task = {
    id: number
    title: string
    description: string
    completed: boolean
    subtasks?: string[]
}


const Crow = () => {
    const [tasks, setTasks] = useState<Task[] | undefined>([])
    const [showNewTaskModal, setShowNewTaskModal] = useState<boolean>(false)
    const [formData, setFormData] = useState<Task>({
        id: 0,
        title: "",
        description: "",
        completed: false,
        subtasks: []
    })

    return (
        <Layout>
            <Modal classNames="w-[400px] p-0" isOpen={showNewTaskModal} onClose={()=>setShowNewTaskModal(false)} >
                <div className="p-4 flex justify-center items-center">
                    <p className="text-dark-text font-sans-secondary text-lg">New Task</p>
                </div>
                <form className="mr-9 py-10 px-4 bg-darkerBack w-full">
                    <Input value={formData.title} label="Title" />
                    <Input value={formData.description} label="Description" />
                    <Input value={formData.subtasks} label="Subtasks" className="w-12/12" />
                    <Button className="w-full mt-4" variant="primary">Create</Button>
                </form>
            </Modal>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-light-text">Tasks</h1>
                <p className="text-light-text">A simple todo app</p>
                <div>
                    {
                        tasks?.map((task) => (
                            <div key={task.id} className="flex flex-col items-center justify-center">
                                <h2 className="text-xl font-bold text-light-text">{task.title}</h2>
                                <p className="text-light-text">{task.description}</p>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-light-text">Subtasks</p>
                                    <ul>
                                        {task.subtasks?.map((subtask) => (
                                            <li key={subtask} className="text-light-text">{subtask}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="fixed inset-0 flex items-center justify-center">
            <Button width="sm" className=" bottom-5 flex justify-center hover:bg-inherit transition-transform hover:scale-105" onClick={()=>setShowNewTaskModal(true)} >
                <PlusCircleIcon width={40} />
            </Button>
            </div>
        </Layout>
    )
}

export default Crow