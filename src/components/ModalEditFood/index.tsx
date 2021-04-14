import { createRef, } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import {Modal} from '../Modal';
import Input from '../Input';
import { EditingFood} from '../../pages/Dashboard'


interface modalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: EditingFood;
  handleUpdateFood: (food: EditingFood) => Promise<void>;
}


export function ModalEditFood({ isOpen, setIsOpen, editingFood, handleUpdateFood}: modalEditFoodProps){
  

  const handleSubmit = async (food: EditingFood) => {
    handleUpdateFood(food);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={createRef()} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

