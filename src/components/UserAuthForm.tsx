import { FC } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "./ui/Button"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
    return <div className={cn('flex justify-center', className)}>
        <Button>Google</Button>
    </div>
}

export default UserAuthForm