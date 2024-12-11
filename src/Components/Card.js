export default function Card({ title, image, description }) {
    return (
        <div>
            <div class="card">
                <div class="card-title">
                    <div class="header-title">{title}</div>
                    <div class="header-image"><img src={image} class="image" alt="pic" /></div>

                </div>
                <div class="card-description">{description}
                </div>
            </div>
        </div>
    )
}