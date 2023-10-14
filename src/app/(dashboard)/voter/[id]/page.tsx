// Dynamic Route
export default function VoterDetail({ params }: { params: { id: string }}) {
    return (
        <div>
            <span>Voter Detail {params.id}</span>
        </div>
    )
}