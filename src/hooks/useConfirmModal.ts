import ConfirmModalWrapper from '@components/Modal/Global/ConfirmModalWrapper';
import type {ModalProps} from '@components/Modal/Global/ModalContext';
import {useModal} from '@components/Modal/Global/ModalContext';

type ConfirmModalOptions = Omit<React.ComponentProps<typeof ConfirmModalWrapper>, keyof ModalProps> & {
    /** Id of the modal. If passed, it will be used to deduplicate the modals. */
    id?: string;
};

const useConfirmModal = () => {
    const context = useModal();

    const showConfirmModal = (options: ConfirmModalOptions) => {
        const {id, ...restOptions} = options;
        return context.showModal({
            component: ConfirmModalWrapper,
            id,
            props: {
                shouldHandleNavigationBack: true,
                ...restOptions,
            },
        });
    };

    return {
        ...context,
        closeModal: () => context.closeModal(),
        showConfirmModal,
    };
};
export default useConfirmModal;
