type Props = {
    url: string;
    playing?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    width?: string;
    height?: string;
    className?: string;
}

export default function Video({
    url,
    playing = false,
    controls = true,
    loop = false,
    muted = false,
    width = '100%',
    height = '100%',
    className = ''
}: Props) {
    return (
        <video
            src={url}
            controls={controls}
            loop={loop}
            muted={muted}
            width={width}
            height={height}
            autoPlay={playing}
            className={className}
        />
    )
}
