export const useAppToast = () => {
    const toast = useToast()

    return{
        toastSuccess: ({title, description = null}) => {
            toast.add({
                title,
                description,
                color: 'green',
                icon: "i-heroicons-check-circle",
              })
        },
        toastError: ({title, description = null}) => {
          toast.add({
                title,
                description,
                icon: 'i-heroicons-exclamation-circle',
                color: 'red'
              }
        )
    }
}}